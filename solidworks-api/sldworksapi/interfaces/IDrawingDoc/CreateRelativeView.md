---
type: method
interface: IDrawingDoc
member: CreateRelativeView
returns: View
parameters:
  -
    name: ModelName
    type: System.String
    description: Path and filename of the model for which to create a relative drawing view
  -
    name: XPos
    type: System.Double
    description: x coordinate where to create the relative drawing view
  -
    name: YPos
    type: System.Double
    description: y coordinate where to create a relative drawing view
  -
    name: ViewDirFront
    type: System.Int32
    description: Orientation as defined by swRelativeViewCreationDirection_e
  -
    name: ViewDirRight
    type: System.Int32
    description: Orientation as defined by swRelativeViewCreationDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.Create1stAngleViews2
  - IDrawingDoc.Create3rdAngleViews2
  - IDrawingDoc.CreateAuxiliaryViewAt2
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.CreateDrawViewFromModelView3
  - IDrawingDoc.CreateSectionViewAt4
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt4
keywords:
  - relative
  - view
  - see
  - also
  - iview
  - drawing
  - views
  - createrelativeview
  - idrawingdoc
  - doc
  - create
  - model
  - name
  - string
  - pos
  - double
  - dir
  - front
  - int32
  - right
  - vb
  - net
  - vba
---

# IDrawingDoc.CreateRelativeView

Creates a relative drawing view.

## Signature

```csharp
View CreateRelativeView( 
   System.String
ModelName
,
   System.Double
XPos
,
   System.Double
YPos
,
   System.Int32
ViewDirFront
,
   System.Int32
ViewDirRight
)
```
## Parameters

- `ModelName` (System.String): Path and filename of the model for which to create a relative drawing view
- `XPos` (System.Double): x coordinate where to create the relative drawing view
- `YPos` (System.Double): y coordinate where to create a relative drawing view
- `ViewDirFront` (System.Int32): Orientation as defined by swRelativeViewCreationDirection_e
- `ViewDirRight` (System.Int32): Orientation as defined by swRelativeViewCreationDirection_e

## Return Value

View

## Remarks

Select:
the first orientation component using selection mark 1.
the second orientation component using selection mark 2.
For multi-body parts only, select bodies to be shown in the created view using selection mark 4.

## Examples

- Create Relative Drawing View (C#) (Create_Relative_Drawing_View_Example_CSharp.htm)
- Create Relative Drawing View (VB.NET) (Create_Relative_Drawing_View_Example_VBNET.htm)
- Create Relative Drawing View (VBA) (Create_Relative_Drawing_View_Example_VB.htm)

## See Also

- `IDrawingDoc.Create1stAngleViews2`
- `IDrawingDoc.Create3rdAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.CreateDrawViewFromModelView3`
- `IDrawingDoc.CreateSectionViewAt4`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt4`