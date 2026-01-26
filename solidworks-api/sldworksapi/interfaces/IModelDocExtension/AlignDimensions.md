---
type: method
interface: IModelDocExtension
member: AlignDimensions
returns: System.Boolean
parameters:
  -
    name: AlignType
    type: System.Int32
    description: Type of alignment as defined by swAlignDimensionType_e
  -
    name: SpaceValue
    type: System.Double
    description: Distance between dimensions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDoc2.AlignOrdinate
  - IModelDoc2.AlignParallelDimensions
  - IModelDoc2.BreakDimensionAlignment
keywords:
  - dimension
  - see
  - also
  - idimension
  - align
  - dimensions
  - aligndimensions
  - imodeldocextension
  - model
  - doc
  - extension
  - type
  - int32
  - space
  - value
  - double
  - boolean
  - auto
  - arrange
  - vb
  - net
  - vba
---

# IModelDocExtension.AlignDimensions

Aligns the selected dimensions in drawing documents.

## Signature

```csharp
System.Boolean AlignDimensions( 
   System.Int32
AlignType
,
   System.Double
SpaceValue
)
```
## Parameters

- `AlignType` (System.Int32): Type of alignment as defined by swAlignDimensionType_e
- `SpaceValue` (System.Double): Distance between dimensions

## Return Value

True if the dimensions are aligned, false if not

## Examples

- Auto-arrange Dimensions (C#) (Auto-arrange_Dimensions_Example_CSharp.htm)
- Auto-arrange Dimensions (VB.NET) (Auto-arrange_Dimensions_Example_VBNET.htm)
- Auto-arrange Dimensions (VBA) (Auto-arrange_Dimensions_Example_VB.htm)

## See Also

- `IModelDoc2.AlignOrdinate`
- `IModelDoc2.AlignParallelDimensions`
- `IModelDoc2.BreakDimensionAlignment`