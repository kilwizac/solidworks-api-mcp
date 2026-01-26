---
type: method
interface: ILibraryFeatureData
member: ISetReferences
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of references
  -
    name: RefVar
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of references VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetReferences
  - ILibraryFeatureData.GetReferencesCount
  - ILibraryFeatureData.IGetReferences
  - ILibraryFeatureData.SetReferences
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - features
  - isetreferences
  - data
  - count
  - int32
  - ref
  - var
  - object
  - void
---

# ILibraryFeatureData.ISetReferences

Sets the references for the library feature.

## Signature

```csharp
void ISetReferences( 
   System.Int32
Count
,
   ref System.Object
RefVar
)
```
## Parameters

- `Count` (System.Int32): Number of references
- `RefVar` (System.Object): in-process, unmanaged C++: Pointer to an array of references VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.GetReferences`
- `ILibraryFeatureData.GetReferencesCount`
- `ILibraryFeatureData.IGetReferences`
- `ILibraryFeatureData.SetReferences`