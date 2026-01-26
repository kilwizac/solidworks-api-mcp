---
type: method
interface: IDimension
member: GetSystemChamferValues
returns: System.Boolean
parameters:
  -
    name: Length
    type: System.Double
    description: Length of chamfer
  -
    name: Angle
    type: System.Double
    description: Angle of chamfer
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDrawingDoc.AddChamferDim
  - IDrawingDoc.IAddChamferDim
keywords:
  - getsystemchamfervalues
  - idimension
  - dimension
  - chamfer
  - values
  - length
  - double
  - angle
  - boolean
  - vb
  - net
  - vba
---

# IDimension.GetSystemChamferValues

Gets the chamfer dimension values in system units.

## Signature

```csharp
System.Boolean GetSystemChamferValues( 
   out System.Double
Length
,
   out System.Double
Angle
)
```
## Parameters

- `Length` (System.Double): Length of chamfer
- `Angle` (System.Double): Angle of chamfer

## Return Value

True if the dimension is a chamfer dimension, false if not

## Remarks

Unlike most other types of dimensions, the values returned for a chamfer dimension are not necessarily the values seen by the user in the displayed dimension text. The display dimension interprets these values and considers the type of chamfer display requested by the user and then creates an appropriate output string.

## Examples

- Get Chamfer Dimension (C#) (Get_Chamfer_Dimension_Example_CSharp.htm)
- Get Chamfer Dimension (VB.NET) (Get_Chamfer_Dimension_Example_VBNET.htm)
- Get Chamfer Dimension (VBA) (Get_Chamfer_Dimension_Example_VB.htm)

## See Also

- `IDrawingDoc.AddChamferDim`
- `IDrawingDoc.IAddChamferDim`