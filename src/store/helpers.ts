import { mapState, mapGetters, mapActions } from "vuex"

export const commonComputed = {
  ...mapGetters("feeds", ["currentFeeds"]),
  ...mapState("entries", ["select"]),
  ...mapState(["isLoading"]),
  ...mapGetters("entries", {
    detail: "currentEntry"
  })
}

export const commonActions = {
  ...mapActions("feeds", ["togglePrimary"]),
  ...mapActions("entries", ["updateEntries", "setSelect"])
}

export const homeComputed = {
  ...mapState(["isLoading"]),
  ...mapGetters("feeds", ["currentFeeds"]),
  ...mapGetters("entries", {
    detail: "currentEntry"
  })
}

export const homeActions = {
  ...mapActions("feeds", ["initFeeds"]),
  ...mapActions("entries", ["updateEntries"])
}
