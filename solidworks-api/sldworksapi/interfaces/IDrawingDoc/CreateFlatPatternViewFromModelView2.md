---
type: method
interface: IDrawingDoc
member: CreateFlatPatternViewFromModelView2
returns: System.Boolean
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ChangeRefConfigurationOfFlatPatternView
  - IDrawingDoc.CreateDrawViewFromModelView3
keywords:
  - createflatpatternviewfrommodelview2
  - idrawingdoc
  - drawing
  - doc
  - create
  - flat
  - pattern
  - view
  - model
  - view2
  - name
  - string
  - config
  - loc
  - double
  - hide
  - bend
  - lines
  - boolean
---

# IDrawingDoc.CreateFlatPatternViewFromModelView2

Obsolete. Superseded by IDrawingDoc::CreateFlatPatternViewFromModelView3.

## Signature

```csharp
System.Boolean CreateFlatPatternViewFromModelView2( 
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
)
```
## Parameters

- `ModelName` (System.String): Name of model
- `ConfigName` (System.String): Name of configuration
- `LocX` (System.Double): X coordinate
- `LocY` (System.Double): Y coordinate
- `LocZ` (System.Double): Z coordinate
- `HideBendLines` (System.Boolean): True hides bend lines, false does not

## Return Value

True if the flat-pattern view was created successfully, false if it was not

## See Also

- `IDrawingDoc.ChangeRefConfigurationOfFlatPatternView`
- `IDrawingDoc.CreateDrawViewFromModelView3`