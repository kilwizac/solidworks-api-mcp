---
type: method
interface: IMouse
member: MouseWheelXYZ
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate where to move the pointer
  -
    name: Y
    type: System.Double
    description: y coordinate where to move the pointer
  -
    name: Z
    type: System.Double
    description: z coordinate where to move the pointer
  -
    name: Clicks
    type: System.Int32
    description: Number of clicks to zoom in and out; specify -120 to to zoom in one click and specify 120 to to zoom out
  -
    name: Flags
    type: System.Int32
    description: Mouse command as defined in swMouse_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - mousewheelxyz
  - imouse
  - mouse
  - wheel
  - xyz
  - double
  - clicks
  - int32
  - flags
  - boolean
---

# IMouse.MouseWheelXYZ

Zoom in or zoom out using the mouse.

## Signature

```csharp
System.Boolean MouseWheelXYZ( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Int32
Clicks
,
   System.Int32
Flags
)
```
## Parameters

- `X` (System.Double): x coordinate where to move the pointer
- `Y` (System.Double): y coordinate where to move the pointer
- `Z` (System.Double): z coordinate where to move the pointer
- `Clicks` (System.Int32): Number of clicks to zoom in and out; specify -120 to to zoom in one click and specify 120 to to zoom out
- `Flags` (System.Int32): Mouse command as defined in swMouse_e (see Remarks )

## Return Value

True if the operation succeeded, false if not

## Remarks

To use this method and access SOLIDWORKS commands, you must add a reference to
SOLIDWORKS
version
Commands type library
(substitute the actual SOLIDWORKS version number for
version
) or
SolidWorks.Interop.swcommands.dll
, typically installed in
install_dir
\api\redist.
The coordinate system is the model's coordinate system.