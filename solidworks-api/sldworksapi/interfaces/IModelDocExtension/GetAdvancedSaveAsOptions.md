---
type: method
interface: IModelDocExtension
member: GetAdvancedSaveAsOptions
returns: System.Object
parameters:
  -
    name: Options
    type: System.Int32
    description: Save with references options as defined in swSaveWithReferencesOptions (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related: []
keywords:
  - getadvancedsaveasoptions
  - imodeldocextension
  - model
  - doc
  - extension
  - advanced
  - save
  - options
  - int32
  - object
  - iadvancedsaveasoptions
---

# IModelDocExtension.GetAdvancedSaveAsOptions

Gets the advanced File &gt; Save As options.

## Signature

```csharp
System.Object GetAdvancedSaveAsOptions( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Save with references options as defined in swSaveWithReferencesOptions (see Remarks )

## Return Value

IAdvancedSaveAsOptions

## Remarks

Call this method before calling
IModelDocExtension::SaveAs3
.
IAdvancedSaveAsOptions::GetItemsNameAndPath
returns a list of items according to how the Options parameter is specified in this method.

## Examples

- IAdvancedSaveAsOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSaveAsOptions)