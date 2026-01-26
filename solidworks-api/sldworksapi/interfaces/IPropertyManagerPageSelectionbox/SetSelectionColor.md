---
type: method
interface: IPropertyManagerPageSelectionbox
member: SetSelectionColor
returns: System.Boolean
parameters:
  -
    name: Special
    type: System.Boolean
    description: True uses a specific color for selections, false does not
  -
    name: Color
    type: System.Int32
    description: Color to use for selections as defined by the swSystemColors; values from swUserPreferenceIntegerValue_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - setselectioncolor
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selection
  - color
  - special
  - boolean
  - int32
---

# IPropertyManagerPageSelectionbox.SetSelectionColor

Sets the color for selections made in this selection box on the PropertyManager page.

## Signature

```csharp
System.Boolean SetSelectionColor( 
   System.Boolean
Special
,
   System.Int32
Color
)
```
## Parameters

- `Special` (System.Boolean): True uses a specific color for selections, false does not
- `Color` (System.Int32): Color to use for selections as defined by the swSystemColors; values from swUserPreferenceIntegerValue_e (see Remarks )

## Return Value

Unknown.

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
By default, the selection box created uses the default selection color. You can use this method to override that default behavior. When you specify a specific selection color by setting the Special argument to True and specifying a color in the Color argument, the resulting selection box has a narrow color bar next to the selection box that is the same color as any faces selected in the graphics area.
The colors that SOLIDWORKS internal dialogs typically use for selection colors are:
swSystemColorsSelectedItem1
swSystemColorsSelectedItem2
swSystemColorsSelectedItem3
Although you should use the typical selection colors for a consistent look-and-feel among your PropertyManager and SOLIDWORKS PropertyManager pages, you can specify any of the following values:
swSystemColorsViewportBackground
swSystemColorsTopGradientColor
swSystemColorsBottomGradientColor
swSystemColorsDynamicHighlight
swSystemColorsHighlight
swSystemColorsSelectedFaceShaded
swSystemColorsDrawingsVisibleModelEdge
swSystemColorsDrawingsHiddenModelEdge
swSystemColorsDrawingsPaperBorder
swSystemColorsDrawingsPaperShadow
swSystemColorsImportedDrivingAnnotation
swSystemColorsImportedDrivenAnnotation
swSystemColorsSketchOverDefined
swSystemColorsSketchFullyDefined
swSystemColorsSketchUnderDefined
swSystemColorsSketchInvalidGeometry
swSystemColorsSketchNotSolved
swSystemColorsGridLinesMinor
swSystemColorsGridLinesMajor
swSystemColorsConstructionGeometry
swSystemColorsDanglingDimension
swSystemColorsText
swSystemColorsAssemblyEditPart
swSystemColorsAssemblyEditPartHiddenLines
swSystemColorsAssemblyNonEditPart
swSystemColorsInactiveEntity
swSystemColorsTemporaryGraphics
swSystemColorsTemporaryGraphicsShaded
swSystemColorsActiveSelectionListBox
swSystemColorsSurfacesOpenEdge
swSystemColorsTreeViewBackground
swSystemColorsShadedEdge