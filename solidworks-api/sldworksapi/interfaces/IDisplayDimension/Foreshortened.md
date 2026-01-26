---
type: property
interface: IDisplayDimension
member: Foreshortened
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.DisplayAsLinear
  - IModelDoc2.AddDimension2
keywords:
  - dimension
  - see
  - also
  - idimension
  - linear
  - foreshortened
  - idisplaydimension
  - display
  - boolean
  - whether
  - vb
  - net
  - vba
readonly: null
---

# IDisplayDimension.Foreshortened

Gets or sets whether a linear dimension is foreshortened in a drawing.

## Signature

```csharp
System.Boolean Foreshortened {get; set;}
```
## Parameters

None.

## Return Value

True if the linear dimension is foreshortened, false if not

## Remarks

This property is only valid for linear dimensions and only when the detailing standard is ANSI.

## Examples

- Get Whether Linear Dimension Is Foreshortened (C#) (Get_Whether_Linear_Dimension_Is_Foreshortened_Example_CSharp.htm)
- Get Whether Linear Dimension Is Foreshortened (VB.NET) (Get_Whether_Linear_Dimension_Is_Foreshortened_Example_VBNET.htm)
- Get Whether Linear Dimension Is Foreshortened (VBA) (Get_Whether_Linear_Dimension_Is_Foreshortened_Example_VB.htm)

## See Also

- `IDisplayDimension.DisplayAsLinear`
- `IModelDoc2.AddDimension2`