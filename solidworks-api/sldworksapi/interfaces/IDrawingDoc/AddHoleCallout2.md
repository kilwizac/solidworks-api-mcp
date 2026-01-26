---
type: method
interface: IDrawingDoc
member: AddHoleCallout2
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X position of hole callout in meters
  -
    name: Y
    type: System.Double
    description: Y position of hole callout in meters
  -
    name: Z
    type: System.Double
    description: Z position of hole callout in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDisplayDimension.GetHoleCalloutVariables
  - IDisplayDimension.IsHoleCallout
  - IDrawingDoc.IAddHoleCallout2
keywords:
  - hole
  - callouts
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - callout
  - icallout
  - addholecallout2
  - idrawingdoc
  - drawing
  - doc
  - add
  - callout2
  - double
  - object
---

# IDrawingDoc.AddHoleCallout2

Adds a hole callout at the specified position to the hole whose edge is selected.

## Signature

```csharp
System.Object AddHoleCallout2( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X position of hole callout in meters
- `Y` (System.Double): Y position of hole callout in meters
- `Z` (System.Double): Z position of hole callout in meters

## Return Value

Display dimension representing the hole callout

## Remarks

When you call this method, the user must click
OK
in the dialog that shows the system-generated hole callout.

## See Also

- `IDisplayDimension.GetHoleCalloutVariables`
- `IDisplayDimension.IsHoleCallout`
- `IDrawingDoc.IAddHoleCallout2`