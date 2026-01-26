---
type: property
interface: ITableAnnotation
member: GridLineWeight
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.BorderLineWeight
  - ITableAnnotation.BorderLineWeightCustom
  - ITableAnnotation.GridLineWeightCustom
keywords:
  - table
  - formats
  - grid
  - lines
  - widths
  - gridlineweight
  - itableannotation
  - annotation
  - line
  - weight
  - int32
  - general
  - feature
  - vb
  - net
  - vba
readonly: null
---

# ITableAnnotation.GridLineWeight

Gets or sets the line weight of the inner lines to the SOLIDWORKS-supplied weight for this table.

## Signature

```csharp
System.Int32 GridLineWeight {get; set;}
```
## Parameters

None.

## Return Value

Weight for inner lines of this table as defined by swLineWeights_e

## Examples

- Get General Table Feature (C#) (Get_General_Table_Feature_Example_CSharp.htm)
- Get General Table Feature (VB.NET) (Get_General_Table_Feature_Example_VBNET.htm)
- Get General Table Feature (VBA) (Get_General_Table_Feature_Example_VB.htm)

## See Also

- `ITableAnnotation.BorderLineWeight`
- `ITableAnnotation.BorderLineWeightCustom`
- `ITableAnnotation.GridLineWeightCustom`