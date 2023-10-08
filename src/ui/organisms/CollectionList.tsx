import { type CollectionItemFragment } from "@/gql/graphql";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

export const CollectionList = ({ collections }: { collections: CollectionItemFragment[] }) => {
	return (
		<div className="bg-gray-100 py-8">
			<div className="mx-auto max-w-7xl px-8">
				<div className="flex gap-4">
					{collections.map((collection) => (
						<CollectionListItem key={collection.id} collection={collection} />
					))}
				</div>
			</div>
		</div>
	);
};
