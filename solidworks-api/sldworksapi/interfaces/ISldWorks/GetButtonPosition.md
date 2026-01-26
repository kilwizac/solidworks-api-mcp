---
type: method
interface: ISldWorks
member: GetButtonPosition
returns: System.Boolean
parameters:
  -
    name: PointAt
    type: System.Int32
    description: Command ID for SOLIDWORKS toolbar button as defined in swCommands_e
  -
    name: LocX
    type: System.Int32
    description: x coordinate of the center of the specified SOLIDWORKS toolbar button
  -
    name: LocY
    type: System.Int32
    description: y coordinate of the center of the specified SOLIDWORKS toolbar button
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.AddToolbar5
keywords:
  - button
  - toolbar
  - toolbars
  - getbuttonposition
  - isldworks
  - sld
  - works
  - position
  - point
  - int32
  - loc
  - boolean
---

# ISldWorks.GetButtonPosition

Gets the center coordinates of the specified SOLIDWORKS toolbar button.

## Signature

```csharp
System.Boolean GetButtonPosition( 
   System.Int32
PointAt
,
   out System.Int32
LocX
,
   out System.Int32
LocY
)
```
## Parameters

- `PointAt` (System.Int32): Command ID for SOLIDWORKS toolbar button as defined in swCommands_e
- `LocX` (System.Int32): x coordinate of the center of the specified SOLIDWORKS toolbar button
- `LocY` (System.Int32): y coordinate of the center of the specified SOLIDWORKS toolbar button

## Return Value

True if method call is successful, false if not

## See Also

- `ISldWorks.AddToolbar5`