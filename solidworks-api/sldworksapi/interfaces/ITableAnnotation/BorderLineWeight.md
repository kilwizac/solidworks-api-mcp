---
type: property
interface: ITableAnnotation
member: BorderLineWeight
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.BorderLineWeightCustom
  - ITableAnnotation.GridLineWeight
  - ITableAnnotation.GridLineWeightCustom
keywords:
  - borders
  - table
  - formats
  - lines
  - widths
  - borderlineweight
  - itableannotation
  - annotation
  - border
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

# ITableAnnotation.BorderLineWeight

Gets or sets the line weight of the border lines to the specified SOLIDWORKS-supplied weight for this table.

## Signature

```csharp
System.Int32 BorderLineWeight {get; set;}
```
## Parameters

None.

## Return Value

Weight of border lines for this table as defined by swLineWeights_e

## Examples

- Get General Table Feature (C#) (Get_General_Table_Feature_Example_CSharp.htm)
- Get General Table Feature (VB.NET) (Get_General_Table_Feature_Example_VBNET.htm)
- Get General Table Feature (VBA) (Get_General_Table_Feature_Example_VB.htm)

## See Also

- `ITableAnnotation.BorderLineWeightCustom`
- `ITableAnnotation.GridLineWeight`
- `ITableAnnotation.GridLineWeightCustom`