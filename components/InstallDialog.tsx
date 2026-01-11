
import React from 'react';

interface InstallDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const InstallDialog = ({ isOpen, onClose }: InstallDialogProps) => {
    if (!isOpen) return null;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    return (
        <div className="drawer-overlay" onClick={onClose}>
            <div className="install-dialog-content" onClick={(e) => e.stopPropagation()}>
                <div className="drawer-header">
                    <h2>Telefona Yükle</h2>
                    <button onClick={onClose} className="close-button">&times;</button>
                </div>
                <div className="drawer-body">
                    <div className="install-steps">
                        <p className="install-intro">Flash UI'ı ana ekranınıza ekleyerek tam ekran deneyimiyle kullanabilirsiniz.</p>
                        
                        {isIOS ? (
                            <div className="step-group">
                                <div className="step">
                                    <span className="step-number">1</span>
                                    <p>Tarayıcınızın alt kısmındaki <strong>Paylaş (Share)</strong> simgesine dokunun.</p>
                                </div>
                                <div className="step">
                                    <span className="step-number">2</span>
                                    <p>Menüyü yukarı kaydırın ve <strong>Ana Ekrana Ekle (Add to Home Screen)</strong> seçeneğini bulun.</p>
                                </div>
                                <div className="step">
                                    <span className="step-number">3</span>
                                    <p>Sağ üstteki <strong>Ekle</strong> butonuna basın.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="step-group">
                                <div className="step">
                                    <span className="step-number">1</span>
                                    <p>Tarayıcı menüsünü (üç nokta <strong>⋮</strong>) açın.</p>
                                </div>
                                <div className="step">
                                    <span className="step-number">2</span>
                                    <p><strong>Uygulamayı Yükle</strong> veya <strong>Ana Ekrana Ekle</strong> seçeneğine dokunun.</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="install-footer-note">
                            Bu uygulama bir web uygulamasıdır ve telefonunuzda yer kaplamaz.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallDialog;
