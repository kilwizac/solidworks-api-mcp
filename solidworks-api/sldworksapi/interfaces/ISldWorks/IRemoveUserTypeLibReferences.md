---
type: method
interface: ISldWorks
member: IRemoveUserTypeLibReferences
returns: System.Boolean
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of user-specified type library references
  -
    name: BstrTlbRef
    type: System.String
    description: Array of strings of the user-specified type library references
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.IGetUserTypeLibReferences
  - ISldWorks.ISetUserTypeLibReferences
  - ISldWorks.RemoveUserTypeLibReferences
  - ISldWorks.UserTypeLibReferences
keywords:
  - type
  - libraries
  - iremoveusertypelibreferences
  - isldworks
  - sld
  - works
  - remove
  - user
  - lib
  - references
  - count
  - int32
  - bstr
  - tlb
  - ref
  - string
  - boolean
---

# ISldWorks.IRemoveUserTypeLibReferences

Removes the user-specified type library references.

## Signature

```csharp
System.Boolean IRemoveUserTypeLibReferences( 
   System.Int32
NCount
,
   ref System.String
BstrTlbRef
)
```
## Parameters

- `NCount` (System.Int32): Number of user-specified type library references
- `BstrTlbRef` (System.String): Array of strings of the user-specified type library references

## Return Value

True if the user-specified type library references are removed, false if not

## Remarks

Before calling this method, call
ISldWorks::GetUserTypeLibReferenceCount
to get the value for NCount.
Any macro recorded after this method is called will not have references to the removed user-specified type libraries.
An add-in can use this method to remove its type library references when the add-in is unloaded.

## See Also

- `ISldWorks.IGetUserTypeLibReferences`
- `ISldWorks.ISetUserTypeLibReferences`
- `ISldWorks.RemoveUserTypeLibReferences`
- `ISldWorks.UserTypeLibReferences`