---
type: method
interface: IAssemblyDoc
member: SetDroppedFileFeatureName
returns: System.Boolean
parameters:
  -
    name: FeatureName
    type: System.String
    description: Feature name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - file-io
  - ui
related:
  - IAssemblyDoc.GetDroppedAtEntity
  - IAssemblyDoc.SetDroppedFileConfigName
  - IAssemblyDoc.SetDroppedFileName
keywords:
  - setdroppedfilefeaturename
  - iassemblydoc
  - assembly
  - doc
  - dropped
  - file
  - feature
  - name
  - string
  - boolean
---

# IAssemblyDoc.SetDroppedFileFeatureName

Sets the name of the feature for the recently dropped file.

## Signature

```csharp
System.Boolean SetDroppedFileFeatureName( 
   System.String
FeatureName
)
```
## Parameters

- `FeatureName` (System.String): Feature name

## Return Value

True if the feature name is set, false if not

## See Also

- `IAssemblyDoc.GetDroppedAtEntity`
- `IAssemblyDoc.SetDroppedFileConfigName`
- `IAssemblyDoc.SetDroppedFileName`