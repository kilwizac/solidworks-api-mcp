---
type: method
interface: ISldWorks
member: GetCommandID
returns: System.Int32
parameters:
  -
    name: Clsid
    type: System.String
    description: Add-in's class ID
  -
    name: UserCmdID
    type: System.Int32
    description: User-defined command ID for the add-in's control (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ICommandGroup.CommandID
keywords:
  - id
  - command
  - getcommandid
  - isldworks
  - sld
  - works
  - clsid
  - string
  - user
  - cmd
  - int32
---

# ISldWorks.GetCommandID

Gets the SOLIDWORKS command ID for an instance of an add-in's control (e.g., an add-in's toolbar button).

## Signature

```csharp
System.Int32 GetCommandID( 
   System.String
Clsid
,
   System.Int32
UserCmdID
)
```
## Parameters

- `Clsid` (System.String): Add-in's class ID
- `UserCmdID` (System.Int32): User-defined command ID for the add-in's control (see Remarks )

## Return Value

Actual runtime value that SOLIDWORKS assigned the add-in's control

## Remarks

UserCmdId is the same user-defined command ID specified when you created the add-in control using
ICommandGroup::AddCommandItem2
. You need the SOLIDWORKS command ID if you want to do something like cause an add-in's toolbar button to flash when visible in SOLIDWORKS.

## See Also

- `ICommandGroup.CommandID`