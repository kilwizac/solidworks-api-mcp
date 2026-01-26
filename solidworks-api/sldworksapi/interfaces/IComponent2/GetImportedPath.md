---
type: method
interface: IComponent2
member: GetImportedPath
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - file-io
related:
  - IComponent2.GetPathName
  - IModelDoc2.GetPathName
keywords:
  - getimportedpath
  - icomponent2
  - component2
  - imported
  - path
  - string
---

# IComponent2.GetImportedPath

Gets the full path name of the model imported for this component.

## Signature

```csharp
System.String GetImportedPath()
```
## Parameters

None.

## Return Value

Full path name of the model imported for this component; empty string if model is not imported

## See Also

- `IComponent2.GetPathName`
- `IModelDoc2.GetPathName`