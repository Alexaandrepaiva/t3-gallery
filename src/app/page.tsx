import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dm53DipMds6FqRJvGE7TyslK3oSzVIPrgYahie",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmb3M9o6VfzW5QnKDm3gRqOioFBtTE6pdH8P7G",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmbPKqAiVfzW5QnKDm3gRqOioFBtTE6pdH8P7G",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmNE3mBWyV3pW5P7bhMaIEFkoSvceYmAflr6s0",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmJ1rtfYiKoWsZatG8xTfQ9O5jdJIrhycvYp3e",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dm1xcwtq6jrGH9m0shzufk3TWlP4wxMIncYRQJ",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmVZrIZ5flPtEAOnoY7Ncmv8g46yqJ0eZzpujX",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmirOicXaPWw8I1xLAQcVSuhX9rKntBDZfekNv",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmmBbbDZn3vZ0cBOuTY1HWkbxRPwM4mApJyqh5",
  "https://7r8k3ju025.ufs.sh/f/41LbDfNrQ2dmFcq1n6ClxEBkq9WSM2bNDU506Aptro4KJwv8",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="Image" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
