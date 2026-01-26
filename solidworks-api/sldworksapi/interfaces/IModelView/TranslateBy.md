---
type: method
interface: IModelView
member: TranslateBy
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: Translation in X direction, in meters and relative to X,Y axes of the graphics area
  -
    name: Y
    type: System.Double
    description: Translation in Y direction, in meters and relative to Windows X,Y axes of the graphics area
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - pan
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - translateby
  - view
  - translate
  - double
  - void
  - viewports
  - vb
  - net
  - vba
---

# IModelView.TranslateBy

Translates the model view in the screen.

## Signature

```csharp
void TranslateBy( 
   System.Double
X
,
   System.Double
Y
)
```
## Parameters

- `X` (System.Double): Translation in X direction, in meters and relative to X,Y axes of the graphics area
- `Y` (System.Double): Translation in Y direction, in meters and relative to Windows X,Y axes of the graphics area

## Return Value

Unknown.

## Remarks

This method lets you specify a vector by which to translate the current SOLIDWORKS graphics area. This vector is in meters and is relative to the X,Y axes of the graphics area. This vector has no relation to the SOLIDWORKS triad axis that is displayed in the graphics area. This method is equivalent to the user-interface panning of the graphics area.

## Examples

- Set Viewports (VB.NET) (Set_Viewports_Example_VBNET.htm)
- Set Viewports (VBA) (Set_Viewports_Example_VB.htm)
- Set Viewports (C#) (Set_Viewports_Example_CSharp.htm)