---
type: method
interface: IAdvancedSaveAsOptions
member: SetPrefixSuffixToAll
returns: void
parameters:
  -
    name: PrefixString
    type: System.String
    description: Prefix
  -
    name: SuffixString
    type: System.String
    description: Suffix
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
related: []
keywords:
  - setprefixsuffixtoall
  - iadvancedsaveasoptions
  - advanced
  - save
  - options
  - prefix
  - suffix
  - all
  - string
  - void
---

# IAdvancedSaveAsOptions.SetPrefixSuffixToAll

Sets a prefix and/or a suffix on all component reference names.

## Signature

```csharp
void SetPrefixSuffixToAll( 
   System.String
PrefixString
,
   System.String
SuffixString
)
```
## Parameters

- `PrefixString` (System.String): Prefix
- `SuffixString` (System.String): Suffix

## Return Value

Unknown.

## Remarks

This method applies a prefix/suffix to the names of all references except the top-level document. After calling this method, call
IAdvancedSaveAsOptions::ModifyItemsNameAndPath
to modify the name and path of individual references and/or the top-level assembly.

## Examples

- IAdvancedSaveAsOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSaveAsOptions)