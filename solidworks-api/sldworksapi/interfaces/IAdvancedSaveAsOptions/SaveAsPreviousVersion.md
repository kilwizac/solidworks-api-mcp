---
type: property
interface: IAdvancedSaveAsOptions
member: SaveAsPreviousVersion
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
related: []
keywords:
  - saveaspreviousversion
  - iadvancedsaveasoptions
  - advanced
  - save
  - options
  - previous
  - version
  - int32
readonly: false
---

# IAdvancedSaveAsOptions.SaveAsPreviousVersion

Sets the SOLIDWORKS version to save to.

## Signature

```csharp
System.Int32 SaveAsPreviousVersion {set;}
```
## Parameters

None.

## Return Value

SOLIDWORKS version to save to (see Remarks )

## Remarks

Examine the Remarks of
ISldWorks::VersionHistory
to find the SOLIDWORKS version to save to.
For this property to save a model as a previous version, you must also use
IAdvancedSaveAsOptions::ModifyItemsNameAndPath
to change the name/path of all of the model's references. You must provide a different name/path than the current name/path, otherwise the SaveAs operation may fail because overwriting the same file is not supported.

## Examples

- IAdvancedSaveAsOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSaveAsOptions)