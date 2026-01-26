---
type: method
interface: IDimension
member: IsReference
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDisplayDimension.IsReferenceDim
  - IDrawingDoc.InsertRefDim
keywords:
  - dimension
  - see
  - also
  - idimension
  - reference
  - dimensions
  - isreference
  - boolean
  - values
  - all
  - configurations
  - vba
---

# IDimension.IsReference

Gets whether the dimension is a reference dimension.

## Signature

```csharp
System.Boolean IsReference()
```
## Parameters

None.

## Return Value

True if the dimension is a reference dimension, false if not

## Remarks

This method returns false for dimensions in 3D sketches.

## Examples

- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)

## See Also

- `IDisplayDimension.IsReferenceDim`
- `IDrawingDoc.InsertRefDim`