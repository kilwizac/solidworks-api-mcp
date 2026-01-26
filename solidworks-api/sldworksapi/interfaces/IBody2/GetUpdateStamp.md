---
type: method
interface: IBody2
member: GetUpdateStamp
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - update
  - stamp
  - getupdatestamp
  - body2
  - int32
---

# IBody2.GetUpdateStamp

Gets the update stamp for the body as of the last rebuild.

## Signature

```csharp
System.Int32 GetUpdateStamp()
```
## Parameters

None.

## Return Value

Update stamp

## Remarks

The update stamp is not changed if the features contributing to the body geometry have not been rebuilt.