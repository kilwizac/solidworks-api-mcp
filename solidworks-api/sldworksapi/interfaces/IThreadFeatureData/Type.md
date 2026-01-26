---
type: property
interface: IThreadFeatureData
member: Type
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.Size
keywords:
  - type
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - string
readonly: null
---

# IThreadFeatureData.Type

Gets or sets the thread profile of this thread feature.

## Signature

```csharp
System.String Type {get; set;}
```
## Parameters

None.

## Return Value

Thread profile (see Remarks )

## Remarks

This property corresponds to a Type in the Thread PropertyManager.
Types are defined in
*.sldlfp
files. You can specify this property with or without the sldlfp extension and path. If you specify this property without:
a path, SOLIDWORKS searches for the file in the folder specified by
Tools > Options > System Options > File Locations > Show folders for Thread Profiles
.
an extension, SOLIDWORKS assumes the extension is sldlfp.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.Size`