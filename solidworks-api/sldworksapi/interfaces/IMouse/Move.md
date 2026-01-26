---
type: method
interface: IMouse
member: Move
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Int32
    description: x coordinate where to move the pointer
  -
    name: Y
    type: System.Int32
    description: y coordinate where to move the pointer
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
  - move
  - imouse
  - mouse
  - int32
  - flags
  - boolean
  - run
  - solidworks
  - commands
  - synthesize
  - events
  - vba
  - vb
  - net
---

# IMouse.Move

Moves the mouse pointer in the window space.

## Signature

```csharp
System.Boolean Move( 
   System.Int32
X
,
   System.Int32
Y
,
   System.Int32
Flags
)
```
## Parameters

- `X` (System.Int32): x coordinate where to move the pointer
- `Y` (System.Int32): y coordinate where to move the pointer
- `Flags` (System.Int32): Mouse command as defined in swMouse_e (see Remarks )

## Return Value

True if the pointer moves to the specified position, false if not

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
In window space, the origin of the coordinate system is the upper-left corner of the window. Positive x is to the right; positive y is down.

## Examples

- Run SOLIDWORKS Commands and Synthesize Mouse Events (VBA) (Run_SOLIDWORKS_Commands_and_Synthesize_Mouse_Events_Example_VB.htm)
- Run SOLIDWORKS Commands and Synthesize Mouse Events (C#) (Run_SolidWorks_Commands_and_Synthesize_Mouse_Events_Example_CSharp.htm)
- Run SOLIDWORKS Commands and Synthesize Mouse Events (VB.NET) (Run_SolidWorks_Commands_and_Synthesize_Mouse_Events_Example_VBNET.htm)