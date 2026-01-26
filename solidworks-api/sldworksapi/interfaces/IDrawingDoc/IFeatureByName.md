---
type: method
interface: IDrawingDoc
member: IFeatureByName
returns: Feature
parameters:
  -
    name: Name
    type: System.String
    description: Name of the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - features
  - ui
related:
  - IDrawingDoc.FeatureByName
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - ifeaturebyname
  - idrawingdoc
  - drawing
  - doc
  - string
---

# IDrawingDoc.IFeatureByName

Gets the specified feature in the drawing.

## Signature

```csharp
Feature IFeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the feature

## Return Value

Pointer to the IFeature object

## See Also

- `IDrawingDoc.FeatureByName`