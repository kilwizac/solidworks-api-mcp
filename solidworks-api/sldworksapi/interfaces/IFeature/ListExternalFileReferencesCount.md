---
type: method
interface: IFeature
member: ListExternalFileReferencesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IComponent2.IListExternalFileReferences2
  - IComponent2.ListExternalFileReferences2
  - IComponent2.ListExternalFileReferencesCount
  - IComponent2.UpdateExternalFileReferences
  - IFeature.ListExternalFileReferences2
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - external
  - references
  - features
  - listexternalfilereferencescount
  - ifeature
  - feature
  - list
  - file
  - count
  - int32
  - vb
  - net
  - vba
---

# IFeature.ListExternalFileReferencesCount

Gets the number of external references on the feature in a part or assembly.

## Signature

```csharp
System.Int32 ListExternalFileReferencesCount()
```
## Parameters

None.

## Return Value

Number of external references

## Remarks

Call this method before calling
IFeature::IListExternalFileReferences2
to determine the size of the array.

## Examples

- Get External References (C#) (Get_External_References_Example_CSharp.htm)
- Get External References (VB.NET) (Get_External_References_Example_VBNET.htm)
- Get External References (VBA) (Get_External_References_Example_VB.htm)

## See Also

- `IComponent2.IListExternalFileReferences2`
- `IComponent2.ListExternalFileReferences2`
- `IComponent2.ListExternalFileReferencesCount`
- `IComponent2.UpdateExternalFileReferences`
- `IFeature.ListExternalFileReferences2`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`