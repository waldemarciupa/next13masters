import Link from "next/link";
import { CollectionCoverImage } from "@/ui/atoms/CollectionCoverImage";
import { type CollectionItemFragment } from "@/gql/graphql";

export const CollectionListItem = ({ collection }: { collection: CollectionItemFragment }) => {
	return (
		<Link href={`/collections/${collection.slug}`}>
			<article>
				{collection.image && (
					<CollectionCoverImage src={collection.image.url} alt={collection.name} />
				)}
				<h3 className="pt-2 font-medium">{collection.name}</h3>
			</article>
		</Link>
	);
};
