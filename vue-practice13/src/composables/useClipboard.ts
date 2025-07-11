import { ref } from "vue";

export function useClipboard() {
  const copiedText = ref("");

  function copy(text: string): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        copiedText.value = text;
        alert("コピーしました");
      })
      .catch(() => {
        alert("コピーできませんでした");
      });
  }

  return {
    copiedText,
    copy,
  };
}
