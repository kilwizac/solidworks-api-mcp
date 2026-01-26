---
type: method
interface: IModelDocExtension
member: ReloadOrReplace
returns: System.Int32
parameters:
  -
    name: ReadOnly
    type: System.Boolean
    description: True to set the model document read-only after reload or replace, false to allow write access
  -
    name: ReplaceFileName
    type: System.String
    description: Replacement model document; null or Nothing to reload the current model document
  -
    name: DiscardChanges
    type: System.Boolean
    description: True to discard changes made to the current model document, false to abort operation if the model document was changed (see Remarks )
  -
    name: ForceReload
    type: System.Boolean
    description: True to force the reload, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.ReloadWithReferences
keywords:
  - reloadorreplace
  - imodeldocextension
  - model
  - doc
  - extension
  - reload
  - replace
  - read
  - only
  - boolean
  - file
  - name
  - string
  - discard
  - changes
  - force
  - int32
  - vba
---

# IModelDocExtension.ReloadOrReplace

Reloads or replaces this model document.

## Signature

```csharp
System.Int32 ReloadOrReplace( 
   System.Boolean
ReadOnly
,
   System.String
ReplaceFileName
,
   System.Boolean
DiscardChanges
,
   System.Boolean
ForceReload
)
```
## Parameters

- `ReadOnly` (System.Boolean): True to set the model document read-only after reload or replace, false to allow write access
- `ReplaceFileName` (System.String): Replacement model document; null or Nothing to reload the current model document
- `DiscardChanges` (System.Boolean): True to discard changes made to the current model document, false to abort operation if the model document was changed (see Remarks )
- `ForceReload` (System.Boolean): True to force the reload, false to not

## Return Value

Error codes as defined by swComponentReloadError_e

## Remarks

The model to reload or replace must be open in its own window frame.
This method does not reload or replace the model if the top assembly has been opened invisibly. In that case, make the model visible by calling
IModelDoc2::Visible
before calling this method.
You must call this method after calling
IModelDoc2::ForceReleaseLocks
, which detaches a file from the file system, to re-attach a detached file to the file system. If you do not call this method after calling IModelDoc2::ForceReleaseLocks, then you will experience problems with OLE objects (e.g., design tables). Any changes made to a file while it is detached are not preserved unless you save the file to disk before calling this method. Additionally if you set this method's DiscardChanges parameter to false and you made changes to a detached file that you are attempting to re-attach to the file system, then this method will fail. DiscardChanges must be set to true to re-attach a detached file.
See
ISldWorks::CloseAndReopen
to perform a similar function with drawing documents.

## Examples

- Reload Model (VBA) (Reload_Model_Example_VB.htm)

## See Also

- `IModelDocExtension.ReloadWithReferences`