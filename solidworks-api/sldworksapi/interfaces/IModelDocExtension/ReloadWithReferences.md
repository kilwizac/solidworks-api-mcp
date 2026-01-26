---
type: method
interface: IModelDocExtension
member: ReloadWithReferences
returns: System.Int32
parameters:
  -
    name: ReadOnly
    type: System.Boolean
    description: True to set the model document read-only after reload or replace, false to allow write access
  -
    name: DiscardChanges
    type: System.Boolean
    description: True to discard changes made to the current model document, false to abort operation if the model document was changed (see Remarks )
  -
    name: ReferencesToReload
    type: System.Object
    description: Array of IDispatch pointers to referenced documents to reload
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - reloadwithreferences
  - imodeldocextension
  - model
  - doc
  - extension
  - reload
  - references
  - read
  - only
  - boolean
  - discard
  - changes
  - object
  - int32
---

# IModelDocExtension.ReloadWithReferences

Reloads this model document with the specified references.

## Signature

```csharp
System.Int32 ReloadWithReferences( 
   System.Boolean
ReadOnly
,
   System.Boolean
DiscardChanges
,
   System.Object
ReferencesToReload
)
```
## Parameters

- `ReadOnly` (System.Boolean): True to set the model document read-only after reload or replace, false to allow write access
- `DiscardChanges` (System.Boolean): True to discard changes made to the current model document, false to abort operation if the model document was changed (see Remarks )
- `ReferencesToReload` (System.Object): Array of IDispatch pointers to referenced documents to reload

## Return Value

Error codes as defined by swComponentReloadError_e

## Remarks

The model to reload or replace must be open in its own window frame.
This method:
provides a performance improvement over
IModelDocExtension::ReloadOrReplace
(when its ForceReload parameter is set to True).
is faster because it reloads only a selection of referenced components.
does not reload or replace the model if the top assembly has been opened invisibly. In that case, make the model visible by calling
IModelDoc2::Visible
before calling this method.
must be called after calling
IModelDoc2::ForceReleaseLocks
, which detaches a file from the file system, to re-attach a detached file to the file system. If you do not call this method after calling IModelDoc2::ForceReleaseLocks, then you will experience problems with OLE objects (e.g., design tables). Any changes made to a file while it is detached are not preserved unless you save the file to disk before calling this method. Additionally if you set this method's DiscardChanges parameter to false and you made changes to a detached file that you are attempting to re-attach to the file system, then this method will fail. DiscardChanges must be set to true to re-attach a detached file.
See
ISldWorks::CloseAndReopen
to perform a similar function with drawing documents.