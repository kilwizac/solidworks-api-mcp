---
type: method
interface: ITableAnnotation
member: SetHeader
returns: System.Boolean
parameters:
  -
    name: Style
    type: System.Int32
    description: Header style as defined in swTableHeaderPosition_e
  -
    name: Count
    type: System.Int32
    description: Number of lines in the header
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetHeaderCount
  - ITableAnnotation.GetHeaderStyle
keywords:
  - table
  - header
  - setheader
  - itableannotation
  - annotation
  - style
  - int32
  - count
  - boolean
---

# ITableAnnotation.SetHeader

Sets the header for this table.

## Signature

```csharp
System.Boolean SetHeader( 
   System.Int32
Style
,
   System.Int32
Count
)
```
## Parameters

- `Style` (System.Int32): Header style as defined in swTableHeaderPosition_e
- `Count` (System.Int32): Number of lines in the header

## Return Value

True if header is set successfully, false if not

## Remarks

Tables created internally by the SOLIDWORKS Design software, such as Hole Charts, Revision Blocks, and BOM tables, are created with a specific number of headers lines.
This method cannot:
Change the number of lines in the header for these tables; thus, the Count argument is ignored.
Turn off the header in these types of tables; thus, this method has no effect, and FALSE is returned.
Essentially, the only thing this method can do with these types of tables is to change the header between the top and the bottom.
If you are changing the header style and number of header lines in a single use of this method, the number of lines is considered before changing the header style. For example, if you are changing a table that had 1 header line at the top, by calling SetHeader (swTableHeader_Bottom, 3), the first 3 lines in the table are moved to the bottom of the table.

## See Also

- `ITableAnnotation.GetHeaderCount`
- `ITableAnnotation.GetHeaderStyle`