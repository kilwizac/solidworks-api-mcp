---
type: method
interface: IDrawingDoc
member: CreateFlatPatternViewFromModelView3
returns: View
parameters:
  -
    name: ModelName
    type: System.String
    description: Name of model
  -
    name: ConfigName
    type: System.String
    description: Name of configuration
  -
    name: LocX
    type: System.Double
    description: X coordinate
  -
    name: LocY
    type: System.Double
    description: Y coordinate
  -
    name: LocZ
    type: System.Double
    description: Z coordinate
  -
    name: HideBendLines
    type: System.Boolean
    description: True hides bend lines, false does not
  -
    name: FlipView
    type: System.Boolean
    description: True flips the view, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IView.FlipView
  - IView.IsFlatPatternView
keywords:
  - flat
  - pattern
  - views
  - createflatpatternviewfrommodelview3
  - idrawingdoc
  - drawing
  - doc
  - create
  - view
  - model
  - view3
  - name
  - string
  - config
  - loc
  - double
  - hide
  - bend
  - lines
  - boolean
  - flip
  - sheet
  - metal
  - part
  - vba
---

# IDrawingDoc.CreateFlatPatternViewFromModelView3

Creates a flat-pattern view from a model view.

## Signature

```csharp
View CreateFlatPatternViewFromModelView3( 
   System.String
ModelName
,
   System.String
ConfigName
,
   System.Double
LocX
,
   System.Double
LocY
,
   System.Double
LocZ
,
   System.Boolean
HideBendLines
,
   System.Boolean
FlipView
)
```
## Parameters

- `ModelName` (System.String): Name of model
- `ConfigName` (System.String): Name of configuration
- `LocX` (System.Double): X coordinate
- `LocY` (System.Double): Y coordinate
- `LocZ` (System.Double): Z coordinate
- `HideBendLines` (System.Boolean): True hides bend lines, false does not
- `FlipView` (System.Boolean): True flips the view, false does not

## Return Value

Flat-pattern view

## Examples

- Create and Flip Flat-Pattern View of Sheet Metal Part (VBA) (Create_and_Flip_Flat-Pattern_View_of_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IView.FlipView`
- `IView.IsFlatPatternView`