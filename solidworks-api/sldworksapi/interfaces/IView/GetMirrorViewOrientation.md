---
type: method
interface: IView
member: GetMirrorViewOrientation
returns: System.Boolean
parameters:
  -
    name: BIsMirrorView
    type: System.Boolean
    description: True if the view is mirrored, false if not
  -
    name: LMirrorViewOrientation
    type: System.Int32
    description: Orientation of the mirror view as defined in swMirrorViewPositions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.SetMirrorViewOrientation
keywords:
  - mirror
  - views
  - view
  - see
  - also
  - iview
  - drawing
  - getmirrorvieworientation
  - orientation
  - boolean
  - int32
  - vb
  - net
  - vba
---

# IView.GetMirrorViewOrientation

Gets whether this view is mirrored.

## Signature

```csharp
System.Boolean GetMirrorViewOrientation( 
   out System.Boolean
BIsMirrorView
,
   out System.Int32
LMirrorViewOrientation
)
```
## Parameters

- `BIsMirrorView` (System.Boolean): True if the view is mirrored, false if not
- `LMirrorViewOrientation` (System.Int32): Orientation of the mirror view as defined in swMirrorViewPositions_e

## Return Value

True if the method executed successfully, false if not

## Examples

- Mirror View (C#) (Mirror_View_Example_CSharp.htm)
- Mirror View (VB.NET) (Mirror_View_Example_VBNET.htm)
- Mirror View (VBA) (Mirror_View_Example_VB.htm)

## See Also

- `IView.SetMirrorViewOrientation`