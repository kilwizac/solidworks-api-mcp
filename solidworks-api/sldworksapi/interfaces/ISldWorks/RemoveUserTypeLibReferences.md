---
type: method
interface: ISldWorks
member: RemoveUserTypeLibReferences
returns: System.Boolean
parameters:
  -
    name: VTlbRef
    type: System.Object
    description: Array of strings of the user-specified type library references
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetUserTypeLibReferenceCount
  - ISldWorks.IGetUserTypeLibReferences
  - ISldWorks.IRemoveUserTypeLibReferences
  - ISldWorks.ISetUserTypeLibReferences
  - ISldWorks.UserTypeLibReferences
keywords:
  - type
  - libraries
  - removeusertypelibreferences
  - isldworks
  - sld
  - works
  - remove
  - user
  - lib
  - references
  - tlb
  - ref
  - object
  - boolean
---

# ISldWorks.RemoveUserTypeLibReferences

Removes the user-specified type library references.

## Signature

```csharp
System.Boolean RemoveUserTypeLibReferences( 
   System.Object
VTlbRef
)
```
## Parameters

- `VTlbRef` (System.Object): Array of strings of the user-specified type library references

## Return Value

True if the user-specified type library references are removed, false if not

## Remarks

Any macro recorded after this method is called will not have references to the removed user-specified type libraries.
An add-in can use this method to
remove its type library references when the add-in is unloaded.
See
Type Libraries
for details.

## See Also

- `ISldWorks.GetUserTypeLibReferenceCount`
- `ISldWorks.IGetUserTypeLibReferences`
- `ISldWorks.IRemoveUserTypeLibReferences`
- `ISldWorks.ISetUserTypeLibReferences`
- `ISldWorks.UserTypeLibReferences`