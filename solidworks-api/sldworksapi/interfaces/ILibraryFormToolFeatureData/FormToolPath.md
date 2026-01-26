---
type: property
interface: ILibraryFormToolFeatureData
member: FormToolPath
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - formtoolpath
  - ilibraryformtoolfeaturedata
  - library
  - form
  - tool
  - feature
  - data
  - path
  - string
readonly: null
---

# ILibraryFormToolFeatureData.FormToolPath

Gets or sets the pathname of this forming tool's part in the Design Library.

## Signature

```csharp
System.String FormToolPath {get; set;}
```
## Parameters

None.

## Return Value

Design library forming tool part pathname

## Remarks

When LibraryFormToolFeatureData is modified and this property changes to another forming tool, then the forming tool feature name changes to reflect the new forming tool name.

## Examples

- ILibraryFormToolFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILibraryFormToolFeatureData)