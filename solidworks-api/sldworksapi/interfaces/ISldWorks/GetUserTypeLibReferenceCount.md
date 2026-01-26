---
type: method
interface: ISldWorks
member: GetUserTypeLibReferenceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.IRemoveUserTypeLibReferences
  - ISldWorks.ISetUserTypeLibReferences
  - ISldWorks.RemoveUserTypeLibReferences
  - ISldWorks.UserTypeLibReferences
keywords:
  - type
  - libraries
  - getusertypelibreferencecount
  - isldworks
  - sld
  - works
  - user
  - lib
  - reference
  - count
  - int32
---

# ISldWorks.GetUserTypeLibReferenceCount

Gets the number of user-specified type library references.

## Signature

```csharp
System.Int32 GetUserTypeLibReferenceCount()
```
## Parameters

None.

## Return Value

Number of user-specified type library references

## Remarks

Call this method before calling
ISldWorks::IGetUserTypeLibReferences
to get the size of the array for that method.
See
Type Libraries
for details.

## See Also

- `ISldWorks.IRemoveUserTypeLibReferences`
- `ISldWorks.ISetUserTypeLibReferences`
- `ISldWorks.RemoveUserTypeLibReferences`
- `ISldWorks.UserTypeLibReferences`