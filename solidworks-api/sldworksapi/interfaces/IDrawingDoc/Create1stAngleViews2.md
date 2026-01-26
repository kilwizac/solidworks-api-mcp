---
type: method
interface: IDrawingDoc
member: Create1stAngleViews2
returns: System.Boolean
parameters:
  -
    name: ModelName
    type: System.String
    description: Name of the document from which to create views
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.Create3rdAngleViews2
  - IDrawingDoc.CreateAuxiliaryViewAt2
  - IDrawingDoc.CreateDetailViewAt4
  - IDrawingDoc.CreateDrawViewFromModelView2
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - standard
  - orthographic
  - create1stangleviews2
  - idrawingdoc
  - doc
  - create1st
  - angle
  - views2
  - model
  - name
  - string
  - boolean
---

# IDrawingDoc.Create1stAngleViews2

Creates standard three orthographic views (first angle projection) for the specified model.

## Signature

```csharp
System.Boolean Create1stAngleViews2( 
   System.String
ModelName
)
```
## Parameters

- `ModelName` (System.String): Name of the document from which to create views

## Return Value

True if successful, false if not

## Remarks

The views honor the automatic scaling behavior as specified in the document setting.

## See Also

- `IDrawingDoc.Create3rdAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt4`
- `IDrawingDoc.CreateDrawViewFromModelView2`
- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateSectionViewAt4`