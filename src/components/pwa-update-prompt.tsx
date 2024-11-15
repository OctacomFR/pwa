// @ts-expect-error - no types for virtual:pwa-register
import { useRegisterSW } from "virtual:pwa-register/react";
import { Button, Modal } from "./ui";

export const PwaUpdatePrompt = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: unknown) {
      // eslint-disable-next-line prefer-template
      console.log(`SW Registered: ${r}`);
    },
    onRegisterError(error: unknown) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <Modal isOpen={offlineReady || needRefresh}>
      <Modal.Content size="4xl">
        <Modal.Header>
          <Modal.Title>Mise à jour disponible</Modal.Title>
          <div>
            {offlineReady ? (
              <span>L'application est prête à fonctionner hors ligne</span>
            ) : (
              <span>
                Nouveau contenu disponible, cliquez sur le bouton rafraîchir
                pour mettre à jour.
              </span>
            )}
          </div>
        </Modal.Header>
        <Modal.Footer>
          <Button intent="secondary" onPress={() => close()}>
            Fermer
          </Button>
          {needRefresh && (
            <Button onPress={() => updateServiceWorker(true)}>
              Rafraîchir
            </Button>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
