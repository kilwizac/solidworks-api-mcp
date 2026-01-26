---
type: method
interface: IConfiguration
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - id
  - configuration
  - see
  - also
  - iconfiguration
  - getid
  - int32
  - active
  - current
  - drawing
  - sheet
  - vb
  - net
  - vba
---

# IConfiguration.GetID

Gets the configuration ID of this configuration.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

Configuration ID of this configuration

## Remarks

A configuration ID:
is unique within the document.
is persistent across SOLIDWORKS Design sessions and never changes, even if you
change the name of the configuration
.
can be used to identify a specific configuration when multiple configurations exist in a model.
cannot be assigned by users.
is not the same as a
persistent reference ID
. You can get a configuration using its persistent reference ID, but you cannot get a configuration using this method.

## Examples

- Get ID of Active Configuration or Current Drawing Sheet (VB.NET) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_VBNET.htm)
- GEt ID of Active Configuration or Current Drawing Sheet (VBA) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_VB.htm)
- Get ID of Active Configuration or Current Drawing Sheet (C#) (Get_ID_of_Active_Configuration_or_Current_Drawing_Sheet_Example_CSharp.htm)