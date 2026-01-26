---
type: method
interface: IDrawingDoc
member: CreateSectionViewAt5
returns: View
parameters:
  -
    name: X
    type: System.Double
    description: x position on the drawing sheet for the center of the section view
  -
    name: Y
    type: System.Double
    description: y position on the drawing sheet for the center of the section view
  -
    name: Z
    type: System.Double
    description: z position on the drawing sheet for the center of the section view
  -
    name: SectionLabel
    type: System.String
    description: Letter for the label for the section view
  -
    name: Options
    type: System.Int32
    description: Options that affect the section view as defined in swCreateSectionViewAtOptions_e
  -
    name: ExcludedComponents
    type: System.Object
    description: Array of components to exclude from the section view
  -
    name: SectionDepth
    type: System.Double
    description: Distance from the selected section line (see Remarks )
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
  - IDrawingDoc.CreateFlatPatternViewFromModelView3
  - IDrawingDoc.CreateRelativeView
  - IDrawingDoc.CreateSectionView
  - IDrawingDoc.CreateUnfoldedViewAt3
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
  - IDrawingDoc.ICreateSectionViewAt5
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - create
  - drawing
  - iview
  - view
  - createsectionviewat5
  - idrawingdoc
  - doc
  - at5
  - double
  - label
  - string
  - options
  - int32
  - excluded
  - components
  - object
  - depth
  - some
  - data
  - vba
  - vb
  - net
---

# IDrawingDoc.CreateSectionViewAt5

Creates the specified section view.

## Signature

```csharp
View CreateSectionViewAt5( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.String
SectionLabel
,
   System.Int32
Options
,
   System.Object
ExcludedComponents
,
   System.Double
SectionDepth
)
```
## Parameters

- `X` (System.Double): x position on the drawing sheet for the center of the section view
- `Y` (System.Double): y position on the drawing sheet for the center of the section view
- `Z` (System.Double): z position on the drawing sheet for the center of the section view
- `SectionLabel` (System.String): Letter for the label for the section view
- `Options` (System.Int32): Options that affect the section view as defined in swCreateSectionViewAtOptions_e
- `ExcludedComponents` (System.Object): Array of components to exclude from the section view
- `SectionDepth` (System.Double): Distance from the selected section line (see Remarks )

## Return Value

Section view

## Remarks

Before calling this method, select the section line or lines to use as a section line.
This method runs silently; the end-user is not prompted for a label.
Use
IView::GetSection
to get the
IDrSection
object, and use
IDrSection::SetLabel2
to set the name for the label, which provides a warning if the name is a duplicate and the standard does not accept duplicate names.

## Examples

- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)

## See Also

- `IDrawingDoc.Create1stAngleViews2`
- `IDrawingDoc.Create3rdAngleViews2`
- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.CreateDrawViewFromModelView3`
- `IDrawingDoc.CreateFlatPatternViewFromModelView3`
- `IDrawingDoc.CreateRelativeView`
- `IDrawingDoc.CreateSectionView`
- `IDrawingDoc.CreateUnfoldedViewAt3`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`
- `IDrawingDoc.ICreateSectionViewAt5`