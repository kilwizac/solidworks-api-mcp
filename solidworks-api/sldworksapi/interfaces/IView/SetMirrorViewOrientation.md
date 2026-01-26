---
type: method
interface: IView
member: SetMirrorViewOrientation
returns: System.Boolean
parameters:
  -
    name: BSetIsMirrorView
    type: System.Boolean
    description: True to mirror the view, false to not
  -
    name: BMirrorVieworientation
    type: System.Int32
    description: Orientation of the mirror view as defined in swMirrorViewPositions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetMirrorViewOrientation
keywords:
  - mirror
  - views
  - view
  - see
  - also
  - iview
  - drawing
  - setmirrorvieworientation
  - orientation
  - boolean
  - vieworientation
  - int32
  - vb
  - net
  - vba
---

# IView.SetMirrorViewOrientation

Sets whether to mirror this view.

## Signature

```csharp
System.Boolean SetMirrorViewOrientation( 
   System.Boolean
BSetIsMirrorView
,
   System.Int32
BMirrorVieworientation
)
```
## Parameters

- `BSetIsMirrorView` (System.Boolean): True to mirror the view, false to not
- `BMirrorVieworientation` (System.Int32): Orientation of the mirror view as defined in swMirrorViewPositions_e

## Return Value

True if the method executed successfully, false if not

## Examples

- Mirror View (C#) (Mirror_View_Example_CSharp.htm)
- Mirror View (VB.NET) (Mirror_View_Example_VBNET.htm)
- Mirror View (VBA) (Mirror_View_Example_VB.htm)

## See Also

- `IView.GetMirrorViewOrientation`