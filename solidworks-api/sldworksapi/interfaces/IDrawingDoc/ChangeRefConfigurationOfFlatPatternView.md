---
type: method
interface: IDrawingDoc
member: ChangeRefConfigurationOfFlatPatternView
returns: System.Boolean
parameters:
  -
    name: ModelName
    type: System.String
    description: Name of the model in the flat-pattern view
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateFlatPatternViewFromModelView2
keywords:
  - flat
  - pattern
  - views
  - changerefconfigurationofflatpatternview
  - idrawingdoc
  - drawing
  - doc
  - change
  - ref
  - configuration
  - view
  - model
  - name
  - string
  - config
  - boolean
---

# IDrawingDoc.ChangeRefConfigurationOfFlatPatternView

Changes the configuration of the selected flat-pattern view of the specified model.

## Signature

```csharp
System.Boolean ChangeRefConfigurationOfFlatPatternView( 
   System.String
ModelName
,
   System.String
ConfigName
)
```
## Parameters

- `ModelName` (System.String): Name of the model in the flat-pattern view
- `ConfigName` (System.String): Name of the configuration

## Return Value

True if the configuration was successfully changed, false if not

## Remarks

Before calling this method, you must select the flat-pattern view of the model.

## See Also

- `IDrawingDoc.CreateFlatPatternViewFromModelView2`