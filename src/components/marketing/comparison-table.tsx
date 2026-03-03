import { CheckCircle, XClose } from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface ComparisonRow {
    feature: string;
    competitor: string | boolean;
    grona: string | boolean;
}

interface ComparisonTableProps {
    competitor: string;
    rows: ComparisonRow[];
    className?: string;
}

const CellValue = ({ value, bold }: { value: string | boolean; bold?: boolean }) => {
    if (value === true) {
        return <CheckCircle className="mx-auto size-5 text-fg-success-secondary" />;
    }
    if (value === false) {
        return <XClose className="mx-auto size-5 text-fg-quaternary" />;
    }
    return <span className={bold ? "font-semibold text-primary" : undefined}>{value}</span>;
};

export const ComparisonTable = ({ competitor, rows, className }: ComparisonTableProps) => {
    return (
        <div className={cx("overflow-x-auto", className)}>
            <table className="w-full min-w-[540px] border-collapse">
                <thead className="sticky top-0 z-10 bg-primary">
                    <tr className="border-b border-secondary">
                        <th className="w-2/5 py-3 pr-4 text-left text-sm font-semibold text-primary">Feature</th>
                        <th className="w-[30%] px-4 py-3 text-center text-sm font-semibold text-primary">{competitor}</th>
                        <th className="w-[30%] py-3 pl-4 text-center text-sm font-semibold text-brand-primary">Grona</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={row.feature} className="border-b border-secondary last:border-0">
                            <td className="py-3.5 pr-4 text-sm font-medium text-secondary">{row.feature}</td>
                            <td className="px-4 py-3.5 text-center text-sm text-secondary">
                                <CellValue value={row.competitor} bold={i === 0} />
                            </td>
                            <td className="py-3.5 pl-4 text-center text-sm text-secondary">
                                <CellValue value={row.grona} bold={i === 0} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
