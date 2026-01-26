---
type: method
interface: IModelDoc2
member: SetZebraStripeData
returns: void
parameters:
  -
    name: Size
    type: System.Double
    description: Number of stripes
  -
    name: Ratio
    type: System.Double
    description: Width of the stripes
  -
    name: Color1
    type: System.Int32
    description: First color in zebra stripe design
  -
    name: Color2
    type: System.Int32
    description: Second color in zebra stripe design
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetZebraStripeData
  - IModelView.DisplayZebraStripes
keywords:
  - zebra
  - stripes
  - setzebrastripedata
  - imodeldoc2
  - model
  - doc2
  - stripe
  - data
  - size
  - double
  - ratio
  - color1
  - int32
  - color2
  - void
---

# IModelDoc2.SetZebraStripeData

Sets the zebra-line data.

## Signature

```csharp
void SetZebraStripeData( 
   System.Double
Size
,
   System.Double
Ratio
,
   System.Int32
Color1
,
   System.Int32
Color2
)
```
## Parameters

- `Size` (System.Double): Number of stripes
- `Ratio` (System.Double): Width of the stripes
- `Color1` (System.Int32): First color in zebra stripe design
- `Color2` (System.Int32): Second color in zebra stripe design

## Return Value

Unknown.

## Remarks

The Size parameter is inversely related; a large size value generates lots of small stripes.

## See Also

- `IModelDoc2.GetZebraStripeData`
- `IModelView.DisplayZebraStripes`