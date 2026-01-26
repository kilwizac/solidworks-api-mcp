---
type: method
interface: ISldWorks
member: GetErrorMessages
returns: System.Int32
parameters:
  -
    name: Msgs
    type: System.Object
    description: Array of the last 20 messages issued in this SOLIDWORKS Design session
  -
    name: MsgIDs
    type: System.Object
    description: Array of the resource IDs of the last 20 messages issued in this SOLIDWORKS Design session
  -
    name: MsgTypes
    type: System.Object
    description: Array of the types of the last 20 messages issued in this SOLIDWORKS Design session (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetLastSaveError
keywords:
  - errors
  - solidworks
  - geterrormessages
  - isldworks
  - sld
  - works
  - error
  - messages
  - msgs
  - object
  - msg
  - ds
  - types
  - int32
  - vba
---

# ISldWorks.GetErrorMessages

Gets the last 20 messages issued in the current SOLIDWORKS Design session.

## Signature

```csharp
System.Int32 GetErrorMessages( 
   out System.Object
Msgs
,
   out System.Object
MsgIDs
,
   out System.Object
MsgTypes
)
```
## Parameters

- `Msgs` (System.Object): Array of the last 20 messages issued in this SOLIDWORKS Design session
- `MsgIDs` (System.Object): Array of the resource IDs of the last 20 messages issued in this SOLIDWORKS Design session
- `MsgTypes` (System.Object): Array of the types of the last 20 messages issued in this SOLIDWORKS Design session (see Remarks )

## Return Value

Number of messages issued in this SOLIDWORKS Design session NOTE: The stack is cleared after calling this method.

## Remarks

The elements of the MsgTypes array are bitmasks of the Microsoft message-box system constants.

## Examples

- Get Messages (VBA) (Get_Messages_Example_VB.htm)

## See Also

- `ISldWorks.GetLastSaveError`