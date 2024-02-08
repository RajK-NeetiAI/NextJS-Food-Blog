export default function MealDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <>
            <div>{`Meal detail page -> ${id}.`}</div>
        </>
    );
};