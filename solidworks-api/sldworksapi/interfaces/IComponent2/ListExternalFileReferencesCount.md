---
type: method
interface: IComponent2
member: ListExternalFileReferencesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - file-io
related:
  - IComponent2.ListExternalFileReferences2
  - IComponent2.UpdateExternalFileReferences
  - IFeature.IListExternalFileReferences2
  - IFeature.ListExternalFileReferences2
  - IFeature.UpdateExternalFileReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - listexternalfilereferencescount
  - icomponent2
  - component2
  - list
  - external
  - file
  - references
  - count
  - int32
  - vba
  - vb
  - net
---

# IComponent2.ListExternalFileReferencesCount

Gets the number of external references on the component.

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
IComponent2::IListExternalFileReferences2
to get the number of external references of the component.

## Examples

- Get External References (VBA) (Get_External_References_Example_VB.htm)
- Get External References (VB.NET) (Get_External_References_Example_VBNET.htm)
- Get External References (C#) (Get_External_References_Example_CSharp.htm)

## See Also

- `IComponent2.ListExternalFileReferences2`
- `IComponent2.UpdateExternalFileReferences`
- `IFeature.IListExternalFileReferences2`
- `IFeature.ListExternalFileReferences2`
- `IFeature.UpdateExternalFileReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.UpdateExternalFileReferences`