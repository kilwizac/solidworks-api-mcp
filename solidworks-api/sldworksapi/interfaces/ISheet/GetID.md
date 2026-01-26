---
type: method
interface: ISheet
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - id
  - sheet
  - see
  - also
  - isheet
  - getid
  - int32
  - active
  - configuration
  - current
  - drawing
  - vb
  - net
  - vba
---

# ISheet.GetID

Gets the ID of this drawing sheet.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

ID of the drawing sheet

## Remarks

Each drawing sheet:
is assigned a unique ID. This ID does not change if you change the name of the drawing sheet.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
.

## Examples

- Get ID of Active Configuration or Current Drawing Sheet (VB.NET) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_VBNET.htm)
- Get ID of Active Configuration or Current Drawing Sheet (VBA) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_VB.htm)
- Get ID of Active Configuration or Current Drawing Sheet (C#) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_CSharp.htm)