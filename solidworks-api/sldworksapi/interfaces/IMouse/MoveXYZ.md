---
type: method
interface: IMouse
member: MoveXYZ
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
  - movexyz
  - imouse
  - mouse
  - move
  - xyz
  - double
  - flags
  - int32
  - boolean
  - run
  - solidworks
  - commands
  - synthesize
  - events
  - vb
  - net
  - vba
---

# IMouse.MoveXYZ

Moves the mouse pointer in the model space.

## Signature

```csharp
System.Boolean MoveXYZ( 
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
Flags
)
```
## Parameters

- `X` (System.Double): x coordinate where to move the pointer
- `Y` (System.Double): y coordinate where to move the pointer
- `Z` (System.Double): z coordinate where to move the pointer
- `Flags` (System.Int32): Mouse command as defined in swMouse_e (see Remarks )

## Return Value

True if the pointer moved to the specified position, false if not

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

## Examples

- Run SOLIDWORKS Commands and Synthesize Mouse Events (C#) (Run_SolidWorks_Commands_and_Synthesize_Mouse_Events_Example_CSharp.htm)
- Run SOLIDWORKS Commands and Synthesize Mouse Events (VB.NET) (Run_SolidWorks_Commands_and_Synthesize_Mouse_Events_Example_VBNET.htm)
- Run SOLIDWORKS Commands and Synthesize Mouse Events (VBA) (Run_SOLIDWORKS_Commands_and_Synthesize_Mouse_Events_Example_VB.htm)